---
layout: project
type: project
image: images/sm_eps.png
title: Electronic Power Supply (EPS)
permalink: projects/eps
# All dates must be YYYY-MM-DD format!
date: 2020-01-10
labels:
  - Eagle
  - Engineering
  - CubeSat
summary: A self developed low-cost EPS for CubeSats with features comparable to market standards.
---

<img class="ui image" src="{{ site.baseurl }}/images/eps.png">

This Electronic Power Supply (EPS) is a low-cost, feature rich, alternative for educational use in space.  Comparable EPS devices include one of the most standard use devices made by <a href="https://www.aac-clyde.space/assets/000/000/103/STARBUCK-NANO_original.pdf?1565681302">ClydeSpace</a>.  This EPS was deliberately designed as a "Two-Layer PCB" to reduce cost but inherently causes increased Electromagnetic Interference (EMI) and limits the amount of features available.  Total cost of production (not including time required for assembly) can be as low as $225.  

This EPS features:
- (4) Solar Pannel Connections
- (1) MicroUSB Connection for Charging Batteries
- (1) Arduino Nano Every as the Micro-Controller
- (3) 3V3 Switched Power Supplies (2A Max ea.)
- (2) 5V Switched Power Supplies (2A Max ea.)
- (1) 12V Switched Power Supply (2A Max)
- (1) 3V3 Bus Power Supply (2A Max)
- (1) 5V Bus Power Supply (2A Max)
- Battery Temperature Input
- Battery Temperature Enable Output
- Bus Voltage Readout
- I2C Bus Interface
- Serial (UART) Interface

Source: <a href="https://github.com/CraigOpie/eps"><i class="large github icon "></i>CraigOpie/eps</a>

