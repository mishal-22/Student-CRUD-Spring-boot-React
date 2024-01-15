import React, { useEffect, useState } from "react";

function Student() {
    const[id,setId]=useState()
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [students,setStudent]=useState([])

  function handleSubmit(event) {
    event.preventDefault();
    const student = { id,name, address };
    if (!id||!name || !address) {
      alert("Please fill in all fields");
      return;
    } else {
      fetch("http://localhost:8080/student/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(student),
      }).then(() => {
        console.log("New Student is added");
        fetchStudent();
      });
      setId("");
      setName("");
      setAddress("");
    }
    
  }
  function onDelete(id){
    fetch(`http://localhost:8080/student/delete/${id}`,{
        method:"DELETE",
        headers:{"Content-Type":"application/json"},
        // body:JSON.parse(id)
    }
  ).then(()=>{
    console.log("Student Deleted")
    fetchStudent();
  })}

  function fetchStudent(){
    fetch("http://localhost:8080/student/get")
    .then((res)=>res.json())
    .then((data)=>{
        setStudent(data)
    })
  }
  useEffect(()=>{
    fetchStudent();
     },[])
  return (
    <div>
      <div className="form-data">
        <form onSubmit={handleSubmit}>
        <label>
            Id
            <input
             type="text"
              inputmode="numeric" 
              pattern="[0-9]*"
              value={id}
              placeholder="Enter the name"
              onChange={(e) => setId(e.target.value)}
            />
          </label>
          <label>
            Name
            <input
              type="text"
              value={name}
              placeholder="Enter the name"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <br />
          <label>
            Address
            <input
              type="text"
              placeholder="Enter the address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
      <h1>Students</h1>
      <div className="display">
     
     {students.map(student=>(
        <div key={student.id} className="block">
           <p>Id: {student.id}</p>
      <p>Name: {student.name}</p>
      <p>Address: {student.address}</p>
      <button onClick={() => onDelete(student.id)}>
              <i className="fas fa-trash-alt"></i> Delete
            </button>
        </div>
     ))}

      </div>
    </div>
  );
}

export default Student;
