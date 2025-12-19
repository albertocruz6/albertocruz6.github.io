#!/bin/bash

# Load nvm if available
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Check if .nvmrc exists and use it
if [ -f .nvmrc ]; then
  REQUIRED_VERSION=$(cat .nvmrc)
  CURRENT_VERSION=$(node -v | sed 's/v//')
  
  if [ "$CURRENT_VERSION" != "$REQUIRED_VERSION" ]; then
    echo "Switching to Node.js v$REQUIRED_VERSION (currently using v$CURRENT_VERSION)"
    nvm use
  fi
fi

# Run the command passed as arguments
exec "$@"
