-> the reason why we need nvlink for bandwidth 
tensor parallelism parallelizes along the width of the model
For each forward pass:
* gradients must be calculated
* backward pass must occur
* communication demands are why NVLInk and InfiniFabric exist - extreme bandwidths (100s of GBs/s) betweenGPUs needs to keep the communication overheads of tensorparallelism low enough toprevent GPUs from stalling out 