import React from 'react';

const Quertion = () => {
    return (
        <div className='w-11/12 mx-auto bg-slate-100 mb-12'>
            <div className="w-11/12 mx-auto bg-slate-50">
                <h2 className='text-xl font-semibold p-5'>1- What is the difference between props and useState?</h2>
                <h3 className='p-3'>Answer:"props" are used to pass data from a parent component to a child component, while "useState" is used to manage state within a component.</h3>
            </div>
            <hr />
            <div className="w-11/12 mx-auto bg-gray-50">
                <h2 className='text-xl font-semibold p-5'>2-How do use useState work?</h2>
                <h3 className='p-3'>Answer:The "state" variable holds the current value of the state, and it can be used in the component to render dynamic content. The "setState" function can be used to update the value of the state, and when the state is updated, React will automatically re-render the component and any child components that depend on the state.</h3>
            </div>
            <hr />
            <div className="w-11/12 mx-auto bg-gray-50">
                <h2 className='text-xl font-semibold p-5'>3-What else can UseEffect do other than load data??</h2>
                <h3 className='p-3'>1.Updating the document title based on the state of the component ! <br />
                    2.Managing subscriptions to external services or APIs ! <br />
                    3.Controlling the behavior of third-party libraries that require access to the DOM ! <br />
                    4.Implementing animations or transitions based on state changes ! <br />
                    5.Triggering effects based on changes to the props or state of the component !
                </h3>
            </div>
            <hr />
            <div className="w-11/12 mx-auto bg-gray-50">
                <h2 className='text-xl font-semibold p-5'> 4-
                    How React works?</h2>
                <h3 className='p-3'>Answer: React is a JavaScript library for building user interfaces, and it works by using a "virtual DOM" to efficiently update the UI in response to changes in the application state.
                </h3>
            </div>
            <hr />
        </div>
    );
};

export default Quertion;