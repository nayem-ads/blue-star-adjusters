#!/bin/bash
# Shared Figma rate limiter: blocks until a call slot is free (max 9 calls per rolling 60s across ALL agents).
# Usage: bash scripts/figma-slot.sh <label>   — run immediately before EVERY Figma MCP call.
LOG=/tmp/figma-calls.log; LOCK=/tmp/figma-calls.lock; touch $LOG
while true; do
  exec 9>$LOCK; flock 9
  now=$(date +%s); n=$(awk -v t=$((now-60)) '$1>t' $LOG | wc -l)
  if [ "$n" -lt 9 ]; then echo "$now ${1:-call}" >> $LOG; flock -u 9; exit 0; fi
  flock -u 9; sleep 3
done
