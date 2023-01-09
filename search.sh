#!/bin/bash
#vim -p $( ls | grep -E $1 2> /dev/null )
echo   $(grep -n -E $1 * | awk -F: '{print $1 " +" $2 " " $1}')
