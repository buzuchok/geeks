<template>
  <div>

    <router-view></router-view>

  </div>

</template>

<script>

import {bus} from '../app'; // resources/js/app.js
// import appMixin from '../../appMixin';
// import MainHeader from './MainHeader.vue';
// import {deleteFromUserListsKey, exportToCsvUserListsKey} from "../../helpers/commonFuncs";
//
// import {saveAs} from 'file-saver';

// import { FileSaver } from 'file-saver';
// FileSaver saveAs(Blob/File/Url, optional DOMString filename, optional Object { autoBom })


export default {
  name: 'main-app',
  // components: {MainHeader},
  //
  // mixins: [appMixin],

  created() {
  },
  mounted() {
    // bus.$on('dialog_confirmed', (paramsArray) => {
    //   if (paramsArray.key == this.deleteFromUserListsKey(paramsArray.user_list_id)) {
    //     this.runDeleteFromUserLists(paramsArray.user_list_id, paramsArray.user_id, paramsArray.index);
    //   }
    //   if (paramsArray.key == this.exportToCsvUserListsKey(paramsArray.user_list_id)) {
    //     this.runUserListExportToCsv(paramsArray.user_list_id, paramsArray.user_id, paramsArray.user_list_title);
    //   }
    // })
  },

  methods: {
    // deleteFromUserListsKey, exportToCsvUserListsKey,

    runDeleteFromUserLists(user_list_id, user_id, index) {
      this.$store.dispatch('userListDelete', {logged_user_id: user_id, user_list_id: user_list_id});
    }, // runDeleteFromUserLists()  {


    runUserListExportToCsv(user_list_id, user_id, user_list_title) {
      axios({
        method: ('post'),
        url: this.$store.getters.apiUrl + '/personal/run-user-list-export-to-csv',
        data: {user_id: user_id, user_list_id: user_list_id},

      }).then((response) => {
        var blob = new Blob([response.data], {type: "text/plain;charset=utf-8"});
        user_list_title = user_list_title.replace(/[\W_]+/g, "");
        saveAs.saveAs(blob, user_list_title + ".csv");
        this.showPopupMessage("User list export", "User list '" + user_list_title + "' successfully exported !", 'success');
      }).catch((error) => {
        this.showPopupMessage("User list export", 'Error exporting user\'s list !', 'error');
        // bus.$emit('onUserListStoreFailure', error);
      });

    } // runUserListExportToCsv()  {

  }, // methods: {


}


</script>
