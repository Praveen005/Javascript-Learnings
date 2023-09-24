

//JS can run in any machine, like your robot, smart bulb, 
/*
JavaScript Runtime Environment has everything that is req. to run a JS code.
It conins, JS engine, WEB APIs, callback queues, Microtask Queues, Event Loop etc.
Browsers have this Javascript Runtime Environment, NodeJS also has this.
Because of his runtime environment, JS can be used in lot of devices. 
*/

/*
JS Engine:
It is not some machine but also a piece of software.

Chrome has V8: written in c++
Microsoft Edge has 'chakra'
Firefox has: 'spiderMonkey : first one to be created: Brendan Eich in 1995 for the Netscape Navigator web browser
NodeJs also has V8


JS-Engine takes Human Readable Code, undergoes three steps:

1. Parsing:
    code is broken down into tokens. It also has something called Syntax Parser, It converts to code to AST
    (Abstract Syntax Tree).

    Go to https://astexplorer.net/ , type in some code and see how the tree looks like.
    AST is now passed on to the compilation phase.

2. Compilation:

    JavaScript has something called JIT Compilation (Just In Time)
    Interpreter: It takes the code and start executing it line by line
    Compiler: Your code is compiled first even before it is executed, it produces a new code which is optimised.
    
    Javascript can behave as an interpreted language as well as a compiled language, depends on the
    Behaviour of JS Engine.
    When Javascript was created, it was an interpretted language, but now most of the modern browsers use both compiler as well as Interpreter. It depends on JS Engine whether it purely interpreted or just in time compiled.

    AST goes to the interpreter,It coverts the code to Byte code and while doing so, it takes the help of compiler to optimize the code(means improes the performance for its faster execution) on the go i.e. hand in hand. That's why they are called Just In Time compilation. It is not a seperate compiler but rather is a compilation starategy.

    So, the Job of the JIT compiler is to optimize the code as much as it can on the runtime.
    Actually na, only the hot spots i.e. the codes that are frequently getting executed are optimized by the Just In Time Cimpilation.

    so, Just-In-Time (JIT) compilation in JavaScript engines is not a separate piece of software but rather a built-in methodology within the engine's design. JIT compilation is a technique employed by modern JavaScript engines to improve the performance of code execution. It involves dynamically translating portions of the code from bytecode to optimized machine code just before they are executed. 

    refer to https://hacks.mozilla.org/2017/02/a-crash-course-in-just-in-time-jit-compilers/  for more








    In some JS engines there is something called AOT(Ahead of Time) comilation.
    Diff between AOT & JIT:
    
    JIT compilation involves dynamically translating code from  bytecode into machine code at runtime, AOT compilation involves compiling code ahead of time(PAHLE SE HI KARKE RAKHNA), before the code is executed. AOT compilation generates machine code directly from the source code or a higher-level representation, without the need for an interpreter.

    Ahead-of-Time (AOT) compilation is a compilation strategy that is the opposite of Just-In-Time (JIT) compilation.

    AOT compilation refers to the process of translating JavaScript source code into machine code before the program is executed.

    AOT compilation is less common in JavaScript engines.

    AOT compilation for JavaScript has some performance benefits, especially in scenarios where startup time is critical. 

    AOT-compiled code can be executed immediately when the program starts, without the need for further compilation or interpretation.

    Matlab ye source code ko directly machine coad me convert karke baitha rahta hai, aur jaise hi program starts ye turant execute hota hai, means startup time for program is really less.
    AOT compilation can result in faster execution at the cost of longer compilation times. It's well-suited for applications where startup time is crucial.



    JIT compilation occurs at runtime, dynamically translating parts of the code from  bytecode into machine code just before execution.
    JIT compilation generates machine code for specific code pats only, usually identified as hotspots(codes parts which are getting executed repeatedly/frequently inside the program)
    JIT compilation might introduce some overhead during startup due to compilation time. However, it can lead to better performance during runtime due to optimized machine code.



    Following are the different optimizations that a JIT does:
        1. Inlining
            JIT compilers often inline small functions or code blocks directly into the calling code. This reduces the function call overhead and allows for better optimization of the combined code.
                ex ref: https://compileroptimizations.com/category/function_inlining.htm

                            int add (int x, int y)
                            {
                            return x + y;
                            }

                            int sub (int x, int y)
                            {
                            return add (x, -y);
                            }

            INSTEAD OF ABOVE, WE CAN DO: We aren't calling the add function now, the function add() can be expanded inline at the call site in the function sub() like below.

                            int sub (int x, int y)
                            {
                            return x + -y;
                            }
  
        2. Dead Code Elimination:
            JIT compilers remove portions of the code that will never be executed.
        3. Constant Folding:
            Expressions involving constants are evaluated at compile time, reducing runtime computation and improving performance.
        4. Global Value Numbering:
            JIT compilers identify identical expressions and eliminate redundant calculations.
        5. Loop-invariant code motion:
            Loop-invariant code motion is the process of moving loop-invariant code to a position outside the loop, which may reduce the execution time of the loop by preventing some computations from being done twice for the same result.
        6. Register Allocation:
            JIT compilers optimize how variables are stored in CPU registers, minimizing memory access and improving execution speed.
        7. Copy elision:
            Copy elision is a compiler optimization technique that aims to eliminate unnecessary copying of objects.

                                std::string createString() {
                                    std::string str = "Hello, world!";
                                    return str;
                                }

                                int main() {
                                    std::string result = createString();
                                    return 0;
                                }
            
            Without copy elision, the code might involve creating a temporary copy of the str object when returning from the createString function. However, with copy elision, the compiler optimizes the code so that the str object is directly constructed in the memory location of result in the main function. This eliminates the need for copying the object.
            
        8. Inline Caching:
            Inline caching is an optimization technique used by Just-In-Time (JIT) compilers in JavaScript engines to speed up property access operations, specifically in cases where the same property is accessed on multiple objects with similar structures.

            The JIT compiler generates specialized code that directly accesses the property without repeatedly checking the object's structure.

            Once the JIT compiler has cached the property access information and generated the optimized code, subsequent accesses to the same property on similar objects can use this optimized code path.

            If the structure of the object changes (e.g., a property is added or removed), the JIT compiler may need to update the cached information and adapt the code accordingly.

            In such cases, the JIT compiler might fall back to a slower code path to reevaluate the object's structure and update the cache.





    
3. Execution

IT HAS TWO MAJOR COMPONENTS: 
1. Memory Heap
    We also have Garbage collector, which always tries to free up the memory here.It uses something called 
    as Mark & Sweep Algorithm.

    Mark & Sweep Agorithm:
        The "Mark and Sweep" algorithm is a memory management technique used by garbage collectors to reclaim memory occupied by objects that are no longer needed or referenced by the program. This algorithm helps prevent memory leaks and ensures efficient memory usage.

        1. Mark Phase:
            The garbage collector starts by assuming all objects in memory are unreachable and "marks" the objects that are still reachable or in use by the program.

            In JavaScript, the root is the global object. Periodically, the garbage collector will start from these roots, find all objects that are referenced from these roots and find all reachable objects and collect all non-reachable objects.

        2. Sweep Phase:
            After the marking phase, the garbage collector performs a "sweep" operation.

            It goes through the entire memory space, looking at each object.

            If an object is marked as reachable (from the previous phase), it leaves it in memory.

            If an object is not marked, it means it is no longer reachable and can be considered garbage.

            The garbage collector then reclaims the memory occupied by these unmarked objects, making it available for future allocations.

2. Call Stack
*/


/*
    Currently Google's V8 is regarded as the fasted JavaScript Engine. Its interpreter's name is Ignition.And Tubofan is the optimizing compiler.


    V8 JavaScript Architecture:
                                
        JS code goes to the parser, AST is created, it goes to the ignition interpreter which converts the AST to ByteCode. And along with the interpreter works the compiler, which parallely generates the optimized machine code, which is then executed by the hardware(say CPU).

    V8 as a Garbage Collector hich is known as Orinoco. It uses Mark & Sweep Algorithm.
    Also have another GC, called Oilpan.




    extra Bakwas:
        while JavaScript itself is single-threaded, modern web browsers and JavaScript engines provide mechanisms to work with concurrency, such as asynchronous programming and the event loop. These mechanisms allow JavaScript to handle multiple tasks concurrently without resorting to true multi-threading.

        Asynchronous programming in JavaScript is achieved using features like callbacks, promises, and async/await. These techniques allow certain operations, such as I/O tasks (e.g., fetching data from a server), to be performed without blocking the entire execution of the program.


*/