<template>
  <v-app>
    <v-container fluid>
      <v-card>
        <v-card-title>User Table</v-card-title>
        <v-card-text>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Job Title</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody class="">
                <!-- Loop through the users array and display user data -->
                <tr v-for="(user, index) in users" :key="index">
                  <td>{{ user.name }}</td>
                  <td>{{ user.jobTitle }}</td>
                  <td>{{ user.email }}</td>
                  <td>
                    <!-- Display buttons and chips based on user selection status -->
                    <v-btn v-if="!user.selected && !user.rejected" @click="selectUser(index)" color="success">
                      Selected
                    </v-btn>
                    <v-btn v-if="!user.selected && !user.rejected" @click="rejectUser(index)" color="error">
                      Rejected
                    </v-btn>
                    <v-chip v-if="user.selected" color="success" dark>
                      Selected
                    </v-chip>
                    <v-chip v-if="user.rejected" color="error" dark>
                      Rejected
                    </v-chip>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card-text>
      </v-card>
    </v-container>
  </v-app>
</template>


<script>
export default {
  data() {
    return {
      users: [
        {
          name: "John Doe",
          jobTitle: "Software Developer",
          email: "john.doe@example.com",
          selected: false,
          rejected: false
        },
        {
          name: "Maria sane",
          jobTitle: "Ui/Ux Developer",
          email: "john.doe@example.com",
          selected: false,
          rejected: false
        },
        {
          name: "Saleem",
          jobTitle: "Backend developer",
          email: "john.doe@example.com",
          selected: false,
          rejected: false
        },
        {
          name: "Sunny",
          jobTitle: "Frontend developer",
          email: "john.doe@example.com",
          selected: false,
          rejected: false
        },

      ]
    };
  },
  methods: {
    selectUser(index) {
      // Implement logic to select a user
      this.users[index].selected = true;
    },
    rejectUser(index) {
      // Implement logic to reject a user
      this.users[index].rejected = true;
    }
  }
};
</script>


<style scoped>
thead th {
  text-align: center;
}


tbody tr:nth-child(even) {
  background-color: #f2f2f2;
}


td {
  padding: 10px;
}


.v-btn {
  min-width: 100px;
  margin-right: 10px;
  font-weight: bold;
}


v-chip {
  margin-right: 5px;
  font-weight: bold;
  text-transform: uppercase;
}

v-card-title {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
}

v-card {
  margin: 20px;
}

v-app {
  padding: 20px;
}
</style>
