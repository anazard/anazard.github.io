---
layout: post
comments: true
title: "[Linux] Crash Course Notes"
tags: [linux, sysadmin, ubuntu, course]
thumbnail: ['terminal.png']
cover: ['command-line.png']
---

I've been following [a series of Linux tutorials](https://www.youtube.com/watch?v=bju_FdCo42w&list=PLtK75qxsQaMLZSo7KL-PmiRarU7hrpnwK) that cover most used commands, troubleshooting and everything else an experienced software developer / sysadmin should know.

This post will be updated as I watch the tutorials and take notes.

## Manual (man)

Enter `man <command>` to see what a given command does and instructions on how to use it. Available for most built-in Unix commands.

## Processes

A process is a running instance of a program. They can run on the background or be interactive (aka foreground).

- **Monitoring processes**

    Enter `htop` (or `top` if not installed) to check all processes currently running.

- **Sending signals**

    Signals are sent by entering `kill <signal-code> <process-id>`.
    
    The command `man kill` shows the list of signals that can be sent.
    
    You can also send signals from `htop` by pressing <span class="badge badge-secondary">F9</span>, equivalent of the command `kill`.

    **Note**: the signal #15 (termination) can be handled by a process, while #9 cannot (terminates the process immediately).

    | Code | Name | Meaning                           | 
    |------|------|-----------------------------------| 
    | 1    | HUP  | hang up                           | 
    | 2    | INT  | interrupt                         | 
    | 3    | QUIT | quit                              | 
    | 6    | ABRT | abort                             | 
    | 9    | KILL | non-catchable, non-ignorable kill | 
    | 14   | ALRM | alarm clock                       | 
    | 15   | TERM | software termination signal       | 

    <br>

- **Changing niceness (priority)**

    You can also change their niceness (priority): <span class="badge badge-secondary">F7</span> to increase and <span class="badge badge-secondary">F9</span> to descrease (-20 to 20, from high to low priority).

    Outside of htop, the niceness of a process can also be changed by a command. Type `nice -n <number from -20 to 20> <process-name>` to lauch a process with a given priority, or `renice -n <number from -20 to 20> <process-id>` to alter the priority of a running process.

## Compression and archiving (tar)

The command to compress and archive a file is `tar -zcf nameoffile.tar.gz ./target_dir` (the flags meaning: archive and compress into the following file file (takes the argument).

The reverse operation can be done with `tar -zxf nameoffile.tar.gz`.

## The $PATH variable

$PATH is the list of directories the system uses to look up binaries for commands we type.
Appending or prepending is important according to the priority of the directory.
You can `echo $PATH` to see what's currently there, `PATH=$PATH:/somedir` to append directories or `PATH=/somedir:$PATH` to prepend.