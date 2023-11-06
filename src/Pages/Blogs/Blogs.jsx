

const Blogs = () => {
  return (
    <div className="m-0 p-0  ">
      <div className="border bg-emerald-50 shadow-xl" >
        <h2 className=" text-xl  my-8 ml-10 mr-6"><span className="text-2xl"> Question </span> <br />  What is One-Way Data Binding ?     </h2>
        <p className="my-8 ml-10 mr-6" > <span className="text-lg " >Answer</span> <br /> Data binding in Angular can be categorized into two types- One-way data binding and two-way data binding. These two help exchange data from component to DOM, and vice-versa. The process is quite similar to that of the MVC architecture in terms of how the data is exchanged or synchronized between View to Model and Model to View. In Angular, the data exchange between the component and view assists us in creating dynamic and interactive web applications. </p>

        {/* <p className="my-8 ml-10 mr-6" >Let’s first understand what data binding is</p> */}
        <p className="my-8 ml-10 mr-6" >One-way data binding in Angular  is a way to bind data from the component to the view (DOM) or vice versa - from view to the component. It is used to display information to the end-user which automatically stays synchronized with each change of the underlying data.</p>
      </div>

      <div className="border mt-12 mb-6 bg-emerald-50 shadow-xl" >
        <h2 className=" text-xl my-8 ml-10 mr-6"> <span className="text-2xl"> Question </span> <br />  What is npm in node.js ?     </h2>
        <p className="my-8 ml-10 mr-6" > <span className="text-lg " >Answer</span> <br /> NPM or Node Package Manager is an open-source repository of tools engineers use to develop applications and websites.</p>
        <p className="my-8 ml-10 mr-6" > NPM is-  an online repository for the publishing of open-source Node.js projects
          a command-line utility for interacting with said repository helping with installing packages and managing package versions and dependencies.</p>
        <p className="my-8 ml-10 mr-6" >Node.js is a runtime environment that allows you to run JavaScript on the backend. <br />  A runtime environment is like a small operating system. It provides all the functionality needed for a program to run.</p>
      </div>
      <div className="border mt-12 mb-6 bg-emerald-50 shadow-xl" >
        <h2 className=" text-xl my-8 ml-10 mr-6"> <span className="text-2xl"> Question </span> <br />  What is the diffrence between Mongodb mysql database ?     </h2>
        <div className="flex ">
          <div className="w-1/2 text-  bg-emerald-50" >
            <h2 className="text-center mt-6 text-xl font-semibold" >MongoDBL</h2>
            <p className="my-8 ml-10 mr-6" >MongoDB is an open-source database developed by MongoDB, Inc. MongoDB stores data in JSON-like documents that can vary in structure. It is a popular NoSQL database.   </p>
            <p className="my-8 ml-10 mr-6" >In MongoDB, each individual records are stored as documents.</p>
            <p className="my-8 ml-10 mr-6" >Documents belonging to a particular class or group as
              stored in a collection.
              Example: collection of users.</p>
            <p className="my-8 ml-10 mr-6">MongoDB is what is called a NoSQL database. This means that pre-defined structure for the incoming data can be defined and adhered to but also, if required different documents in a collection can have different structures. It has a dynamic schema.</p>
          </div>
          <div className="w-1/2  ml-4" >
            <h2 className="text-center mt-6 text-xl font-semibold" >MySQL</h2>
            <p className="my-8 ml-10 mr-6" >MySQL is a popular open-source relational database management system (RDBMS) that is developed, distributed and supported by Oracle Corporation.</p>
            <p className="my-8 ml-10 mr-6" >In MySQL, each individual records are stored as rows in a table.</p>
            <p className="my-8 ml-10 mr-6">A table is used to store rows (records) of similar type.</p>
            <p className="my-8 ml-10 mr-6" >MySQL as the name suggests uses Structured Query Language (SQL) for database access. The schema can not be changed. The inputs following the given schema are only entered.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;