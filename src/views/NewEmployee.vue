<template>
    <div id='new-employee'>
        <h3>New Employee</h3>
        <div class="row">
            <form @submit.prevent="saveEmployee" class="col s12">
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="employee_id" required>
                        <label for="">Employee ID#</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="name" required>
                        <label for="">Name</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="dept" required>
                        <label for="">Department</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="position" required>
                        <label for="">Position</label>
                    </div>
                </div>
                <button type="submit" class="btn primary btn-operate-em">Submit</button>
                <router-link to="/" class="btn grey">Cancel</router-link>
            </form>
        </div>
    </div>
</template>

<script>

import db from "../firebase_init";
export default {
    name: 'new-employee',
    data() {
        return {
            employee_id: null,
            name : null,
            dept : null,
            position : null,
        }
    },
    methods: {
        saveEmployee() {
            this.$Progress.start();
            db.collection('employees').add({
                employee_id: this.employee_id,
                name: this.name,
                dept: this.dept,
                position: this.position
            })
            .then(docRef => {
                this.$Progress.finish();
                this.$router.push('/');
            })
            .catch(error => {
                this.$Progress.fail();
                console.log(err);
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
