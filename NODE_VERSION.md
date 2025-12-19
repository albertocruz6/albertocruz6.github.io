# Node Version Management

This project uses Node.js v22.21.1. We use `.nvmrc` to specify the required version.

## Automatic Version Switching

### Option 1: Automatic shell integration (Recommended)

Add this to your `~/.zshrc` file for automatic version switching when entering the directory:

```bash
# Automatically use the correct Node version from .nvmrc
autoload -U add-zsh-hook
load-nvmrc() {
  local nvmrc_path
  nvmrc_path="$(nvm_find_nvmrc)"

  if [ -n "$nvmrc_path" ]; then
    local nvmrc_node_version
    nvmrc_node_version=$(nvm version "$(cat "${nvmrc_path}")")

    if [ "$nvmrc_node_version" = "N/A" ]; then
      nvm install
    elif [ "$nvmrc_node_version" != "$(nvm version)" ]; then
      nvm use
    fi
  elif [ -n "$(PWD=$OLDPWD nvm_find_nvmrc)" ] && [ "$(nvm version)" != "$(nvm version default)" ]; then
    echo "Reverting to nvm default version"
    nvm use default
  fi
}

add-zsh-hook chpwd load-nvmrc
load-nvmrc
```

After adding this, restart your terminal or run `source ~/.zshrc`.

### Option 2: Manual switching

Run this command when you enter the project:

```bash
nvm use
```

### Option 3: Scripts handle it automatically

The `dev`, `build`, and `preview` scripts automatically check and switch to the correct Node version using the `scripts/ensure-node-version.sh` wrapper.

## Installing the required Node version

If you don't have Node.js v22.21.1 installed:

```bash
nvm install 22.21.1
```

## Verifying your Node version

```bash
node -v
# Should output: v22.21.1
```
