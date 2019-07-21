<template>
    <div id='edit-employee'>
        <h4>Edit Employee</h4>
        <div class="row">
            <form @submit.prevent="updateEmployee" class="col s12">
                <div class="row">
                    <div class="input-field col s12">
                        <input id="employee_id" type="text" v-model="employee_id" required disabled>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input id="name" type="text" v-model="name" required>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input id="dept" type="text" v-model="dept" required>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input id="position" type="text" v-model="position" required>
                    </div>
                </div>
                <button type="submit" class="btn primary btn-operate-em">Change</button>
                <router-link to="/" class="btn grey">Cancel</router-link>
            </form>
        </div>
    </div>
</template>

<script>

import db from "../firebase_init";
export default {
    name: 'edit-employee',
    data() {
        return {
            employee_id: null,
            name : null,
            dept : null,
            position : null,
        }
    },
    beforeRouteEnter (to, from, next) {
        db.collection('employees').where('employee_id', '==', to.params.employee_id).get().then(querySnapShot => {
            querySnapShot.forEach(doc => {
                next(vm => {
                    vm.employee_id = doc.data().employee_id,
                    vm.name = doc.data().name,
                    vm.dept = doc.data().dept,
                    vm.position = doc.data().position
                });
            });
        });
    },
    watch: {
        '$route' : 'fetchData'
    },
    methods: {
        fetchData() {
             db.collection('employees').where('employee_id', '==', this.$router.params.employee_id).get()
            .then(querySnapShot => {
                querySnapShot.forEach(doc => {
                    next(vm => {
                        this.employee_id = doc.data().employee_id,
                        this.name = doc.data().name,
                        this.dept = doc.data().dept,
                        this.position = doc.data().position
                    });
                });
            });
        },
        updateEmployee() {
             db.collection('employees').where('employee_id', '==', this.$route.params.employee_id).get()
            .then(querySnapShot => {
                querySnapShot.forEach(doc => {
                    doc.ref.update({
                        employee_id: this.employee_id,
                        name: this.name,
                        dept: this.dept,
                        position: this.position
                    })
                    .then(() => {this.$router.push({name:'view-employee', params: {employee_id: this.employee_id}})})
                    .catch(error => console.log(err));
                });
            });
        }
    }
}
</script>

<style scoped>
    .btn-operate-em{
        margin-right: 10px;
    }
</style>
