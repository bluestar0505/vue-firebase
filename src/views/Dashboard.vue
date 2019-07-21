<template>
    <div id='dashboard'>
        <ul class="collection with-header">
            <li class="collection-header"><h4>Employees</h4></li>
            <li class="collection-item" v-for="employee in employees" v-bind:key="employee.id">
                <div class="chip">{{ employee.dept }}</div>
                {{ employee.employee_id }} : {{ employee.name }}

                <router-link class="secondary-content btn-icon-view" v-bind:to="{name:'view-employee', params: {employee_id: employee.employee_id}}">
                    <i class="fa fa-eye"></i>
                </router-link>
                <router-link class="secondary-content btn-icon-edit" v-bind:to="{name:'edit-employee', params: {employee_id: employee.employee_id}}">
                    <i class="fa fa-pencil"></i>
                </router-link>
            </li>
        </ul>
        <div class="fixed-action-btn">
            <router-link to="/new" class="btn-floating btn-large red">
                <i class="fa fa-plus"></i>
            </router-link>
        </div>
    </div>
</template>

<script>
import db from '../firebase_init';

export default {
    name: 'dashboard',
    data() {
        return {
            employees : []
        }
    },
    created() {
        this.$Progress.start();
        db.collection('employees').orderBy('dept', 'asc').get().then(querySnapShot => {
           querySnapShot.forEach( doc => {
               const data = {
                    'id' : doc.id,
                    'employee_id' : doc.data().employee_id,
                    'name' : doc.data().name,
                    'dept' : doc.data().dept,
                    'position' : doc.data().position
               }
               this.employees.push( data );
           }); 
            console.log(this.employees);
        });

        this.$Progress.finish();

    },
    mounted() {
    }
}
</script>

<style scoped>
    .btn-icon-edit {
        margin-right: 5px;
    }
</style>
