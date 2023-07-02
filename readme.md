# Multithreading
Multithreading is a way of running chunks of a process simulatneously and independently to each other, it aims for better utilization of cpu and it's cores. Let's imagine you want to process few files and present the response after processing each of them, so there is one way where we can process file one after another or concurrently or we can use threads to create multiple sub-processes and each sub-process will process a file alloted to them at the same time independently and at the end we can get the response from each sub-process and present to as a single response to client. This way we can our results faster and with better utilization of cpu.

## CPU CORES
Each cores of cpu are independent unit of cpu having there own set of register and control logic, they have the capability to run set of instructions independently to each other. A CPU with multiple cores can have better performance as compared to single core, as in multi-cores we can have mutliple processes to run simultaneously, but in single core cpu we can have multiple threads but they are executed one by one with the help of context switching and this happens so rapidly, giving an illusion of simultaenous execution.

## Threading and cores
In single threaded scenario, each CPU core can execute a single thread at a time, meaning if we have quad-core processor, then we can run upto four threads at the same time.

In multi threaded scenario, a single core can run multiple threads at the same time in a single core.