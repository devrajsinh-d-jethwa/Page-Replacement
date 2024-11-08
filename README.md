# Page Replacement Algorithms

This project implements **Page Replacement Algorithms** in Operating Systems. Page replacement is a critical aspect of memory management, and this project demonstrates the working of three key algorithms:

- **First In First Out (FIFO)**
- **Least Recently Used (LRU)**
- **Optimal Page Replacement**

## Algorithms Implemented

### 1. **First In First Out (FIFO)**
FIFO is the simplest page replacement algorithm. It works on the principle of **"first come, first served"** — the oldest page in memory is replaced when a new page needs to be loaded.

### 2. **Least Recently Used (LRU)**
LRU replaces the page that has not been used for the longest period of time. The algorithm keeps track of the order in which pages were last accessed and replaces the least recently used one when a new page is needed.

### 3. **Optimal Page Replacement**
Optimal page replacement is an ideal algorithm that replaces the page that will not be used for the longest period of time in the future. This algorithm is theoretical and not feasible in real systems but is useful for comparison purposes.

## Technologies Used

- **Programming Language**: HTML,CSS,JavaScript
- **Algorithms**: FIFO, LRU, Optimal Page Replacement

## Features

- Implementations of **FIFO**, **LRU**, and **Optimal Page Replacement** algorithms.
- Calculation of **Page Faults** and **Page Hit Ratio** for each algorithm.
- Command-line interface (CLI) to run the program and test the algorithms with custom page reference strings.

## Getting Started

### Prerequisites

Before running this project, make sure you have the following installed:

- **JavaScript**
- **Make** (optional, for building the project)

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/yourusername/page-replacement-algorithms.git
   cd page-replacement-algorithms
