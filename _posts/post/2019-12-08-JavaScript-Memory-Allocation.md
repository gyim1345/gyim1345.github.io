---
layout: post
title: "JS memory and memory allocation"
description: how memory allocation works on var, let, const and array
category: posts
---

The memory is where the programs are kept when they are running. it also contains the data needed by the running programs. The memory is build from dram chips. Dram stands for dynamic random access memory. multiple Drams are used together to contain the instructions and data of a program. in contrast to sequetial access memories, such as magnetic tapes, the ram portion of the r




-----------------


--------

Summarization
- (const, let, var) initializes new address of the value inputed.
  - if it is a primitive data like int string etc. then it is stored in a call stack
  - if it is a non primitive data like an array or object, the data values are stored in the heap with the address linked to the callstack
- const cant change its address after its first initialization but can change its data
- primitive data which is located in the call stack has fixed address and changes to the data means change to the address whereas non primitive datas located in the call stack has fixed address but the data inside can be changed which is located in the heap
