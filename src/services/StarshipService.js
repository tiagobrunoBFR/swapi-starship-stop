import http from './../utilities/http';


export default {

    getListStarships(page =1) {
        return http.get('starships/?page='+page);
    }

}