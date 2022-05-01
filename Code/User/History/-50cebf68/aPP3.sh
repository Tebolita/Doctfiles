#!/usr/bin/env bash

# Terminate already running bar instances 

killall -q polybar

# If all your bars have ipc enable, you can also use
# polybar -msg cmd quit

#launch bar1 a

echo "..." | tee -a /tmp/polybar1.log 
polybar left 2>&1 | tee -a /tmp/polybar1.log & disown
#polybar spotify 2>&1 | tee -a /tmp/polybar2.log & disown  


echo "Bars launched"
