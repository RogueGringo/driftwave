#!/bin/bash
# Start the local LLM server for driftwave L0/L1 agents
# Requires: pip install llama-cpp-python[server]
# Model: Llama 3.2 3B Instruct (Q4_K_M quantized, ~2GB VRAM)

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PLUGIN_ROOT="$(dirname "$SCRIPT_DIR")"
MODEL_DIR="$PLUGIN_ROOT/models"
MODEL_PATH="$MODEL_DIR/llama-3.2-3b-instruct-q4_k_m.gguf"
PORT="${DW_LLM_PORT:-8090}"

# Colors
AMBER='\033[0;33m'
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${AMBER}[driftwave]${NC} Starting local LLM server..."

# Check if model exists
if [ ! -f "$MODEL_PATH" ]; then
  echo -e "${RED}[driftwave]${NC} Model not found at $MODEL_PATH"
  echo ""
  echo "Download a compatible model:"
  echo "  huggingface-cli download bartowski/Llama-3.2-3B-Instruct-GGUF \\"
  echo "    --include 'Llama-3.2-3B-Instruct-Q4_K_M.gguf' \\"
  echo "    --local-dir $MODEL_DIR"
  echo ""
  echo "Or use any GGUF model and set DW_LLM_MODEL_PATH:"
  echo "  DW_LLM_MODEL_PATH=/path/to/model.gguf $0"
  exit 1
fi

# Allow model path override
MODEL_PATH="${DW_LLM_MODEL_PATH:-$MODEL_PATH}"

# Check if already running
if curl -s "http://localhost:$PORT/v1/models" > /dev/null 2>&1; then
  echo -e "${GREEN}[driftwave]${NC} LLM server already running on port $PORT"
  exit 0
fi

# Check if llama-cpp-python is installed
if ! python3 -c "import llama_cpp" 2>/dev/null; then
  echo -e "${RED}[driftwave]${NC} llama-cpp-python not installed"
  echo "Install with: pip install 'llama-cpp-python[server]' --extra-index-url https://abetlen.github.io/llama-cpp-python/whl/cu128"
  exit 1
fi

echo -e "${AMBER}[driftwave]${NC} Model: $MODEL_PATH"
echo -e "${AMBER}[driftwave]${NC} Port: $PORT"
echo -e "${AMBER}[driftwave]${NC} GPU layers: all (-1)"

# Start server in background
nohup python3 -m llama_cpp.server \
  --model "$MODEL_PATH" \
  --n_gpu_layers -1 \
  --port "$PORT" \
  --host 127.0.0.1 \
  --n_ctx 4096 \
  > "$PLUGIN_ROOT/models/llm_server.log" 2>&1 &

LLM_PID=$!
echo "$LLM_PID" > "$PLUGIN_ROOT/models/llm_server.pid"

# Wait for server to be ready (max 30s)
echo -e "${AMBER}[driftwave]${NC} Waiting for server (PID $LLM_PID)..."
for i in $(seq 1 30); do
  if curl -s "http://localhost:$PORT/v1/models" > /dev/null 2>&1; then
    echo -e "${GREEN}[driftwave]${NC} LLM server ready on http://localhost:$PORT"
    echo -e "${GREEN}[driftwave]${NC} OpenAI-compatible API at http://localhost:$PORT/v1"
    exit 0
  fi
  sleep 1
done

echo -e "${RED}[driftwave]${NC} Server failed to start within 30s. Check $PLUGIN_ROOT/models/llm_server.log"
exit 1
