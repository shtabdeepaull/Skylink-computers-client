import React from 'react';

const Blog = () => {
    return (
        <div className="container m-8 grid gap-4 gap-x-3 md:grid-cols-2 lg:grid-cols-3">
            <div class="card  w-80 bg-primary text-primary-content">
                <div class="card-body">
                    <h2 class="card-title text-center text-accent">How will you improve the performance of react Application??</h2>
                    <p>To optimize and improve the performance of react application, we can use
                        different type of method.Examples are given below..
                        <ul>Keeping component state local where necessary. </ul>
                        <ul>Memoizing React components to prevent unnecessary re-renders. </ul>
                        <ul>Code-splitting in React using dynamic import() </ul>
                        <ul>Windowing or list virtualization in React. </ul>
                        <ul>Lazy loading images in React. </ul>
                    </p>
                </div>
            </div>



            <div class="card ml-2 w-80 bg-primary text-primary-content">
                <div class="card-body">
                    <h2 class="card-title text-center text-accent">What are the different ways to manage a state in a react application??</h2>
                    <p>The state helps in keeping the data of different components in sync since each state update will re-render all relevant components. It can also act as a medium to communicate between various components. Managing state is one of the hardest parts of any application, and that is why there are so many state management libraries/tools available, including Redux, MobX, Flux, RxJS, and more.</p>
                </div>
            </div>


            <div class="card w-80 bg-primary text-primary-content">
                <div class="card-body">
                    <h2 class="card-title text-center text-accent">How does prototypical inheritance work?</h2>
                    <p>Prototyping is an experimental process where design teams implement ideas into tangible forms from paper to digital. Teams build prototypes of varying degrees of fidelity to capture design concepts and test on users. With prototypes, we can refine and validate our designs so our brand can release the right products.</p>
                </div>
            </div>

            <div class="card w-80 bg-primary text-primary-content">
                <div class="card-body">
                    <h2 class="card-title text-center text-accent">Why do not set the state directly in react??</h2>
                    <p>we should never update the state directly because of the following reasons:

                        If we update it directly, calling the setState() afterward may just replace the update we made.
                        When we directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.
                        we will lose control of the state across all components.</p>
                </div>
            </div>

            <div class="card w-80 bg-primary text-primary-content">
                <div class="card-body">
                    <h2 class="card-title  text-center text-accent">How will you implement a search to find products by name??</h2>
                    <p>Searching allows customers to find certain products that satisfy a set of criteria.What we can do instead is to give the React Components we're interested in finding, a certain css class name, which  then we can find in the DOM. we can of course also use id and use document. getElementById() (if the id is unique) or name and use document. getElementsByName() , and other methods.</p>
                </div>
            </div>

            <div class="card w-80 bg-primary text-primary-content">
                <div class="card-body  ">
                    <h2 class="card-title text-center text-accent">What is a unit test? Why should write unit test??</h2>
                    <p> Unit testing is a software testing method where “units” the individual components of software are tested. Developers write unit tests for their code to make sure that the code works correctly. This helps to detect and protect against bugs in the future.For Test-Driven Development, we write unit tests before writing any implementation.Unit test makes our implementation details in our code shorter and easier to understand. In this instance, the best time to write unit tests is immediately. </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;