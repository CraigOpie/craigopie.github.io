---
layout: project
type: project
image: images/smc/smc.jpg
title: Secure Multiparty Computation
gh_user: craigopie
repo: secure-multiparty-computation
permalink: projects/secure-multiparty-computation
# All dates must be YYYY-MM-DD format!
date: 2023-05-23
labels:
  - Python
  - Zero Knowledge Proof
summary: A python implementation of Yao's Millionaire's Problem to help understand the concepts described in Andrew Yao's 1982 paper.
---

<img class="ui image" src="{{ site.baseurl }}/images/smc/smc.jpg" alt="" width="100%" />

### OVERVIEW
***
This project contains a collection of tools and algorithms for performing secure computations in a collaborative environment. SMPC allows multiple parties to jointly compute a function over their private inputs, without revealing anything except the output.  This implementation of SMPC solves for a basic "greater than" problem - also know as [Yao's Millionaires' Problem](https://research.cs.wisc.edu/areas/sec/yao1982-ocr.pdf).  The Yao's Millionaires' Problem, introduced in 1982 by computer scientist Andrew Yao, is a secure multi-party computation issue where two millionaires, Alice and Bob, aim to determine their relative wealth without revealing their actual financial information.

## Features
- Implementations of various SMPC protocols and techniques
- Support for both additive and arithmetic circuits
- Optimized for performance and efficiency

## Requirements
- Python 3.x
- pycryptodome libraries
