<template>
    <div>
        <nav class="navbar navbar-light bg-light">
            <a href="/" class="navbar-brand">Test</a>
        </nav>
        <div class="container">
            <div class="row pt-5">
                <div class="col-md-5">
                    <div class="card">
                        <div class="card-body">
                            <form @submit.prevent="addEmployee">
                                <div class="form-group">
                                    <input type="text" class="form-control"
                                    v-model="employee.name"
                                    name="" id="" placeholder="Insert your name">
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control"
                                    v-model="employee.phone"
                                    name="" id="" placeholder="Insert your Phone">
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control"
                                    v-model="employee.email"
                                    name="" id="" placeholder="Insert your Email">
                                </div>
                                <div class="form-group">
                                    <textarea name="" id="" cols="30" rows="10" class="form-control"
                                    v-model="employee.subject"
                                    placeholder="Insert your Subject">
                                    </textarea>
                                </div>
                                <button id="msg" class="btn btn-primary btn-block">Enviar</button>
                                
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-md-7">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>Subject</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="employee of employees">
                                <td>{{employee.name}}</td>
                                <td>{{employee.phone}}</td>
                                <td>{{employee.email}}</td>
                                <td>{{employee.subject}}</td>
                                <td>
                                    <button @click="deleteEmployee(employee._id)" 
                                    class="btn btn-danger">
                                        Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


class Employee{
    constructor(name, phone, email, subject){
        this.name = name,
        this.phone = phone,
        this.email = email,
        this.subject = subject
    }
}
export default {       
    data(){
        return{
            employee: new Employee(),
            employees: []
        }
    },
    created(){
        this.getEmployees();
    },
    methods: {
        addEmployee() {
            fetch('/employees', {
                method: 'POST',
                body: JSON.stringify(this.employee),
                headers: {
                     'Accept': 'application/json',
                     'Content-type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => {
                toastr.success('Empleado guardado','Orlando TEST');
                this.getEmployees();       
            })

            this.employee = new Employee();
        },
        getEmployees(){
            fetch('/employees')
                .then(res => res.json())
                .then(data => {
                    this.employees = data;
                    console.log(this.employees)
                });
            
        },
        deleteEmployee(id){
            fetch('/employees/' + id, {
                method: 'DELETE',
                headers: {
                     'Accept': 'application/json',
                     'Content-type': 'application/json'
                }
            })
             .then(res => res.json())
             .then(data => {
                this.getEmployees();       
            }) 
        }
    }
}


</script>