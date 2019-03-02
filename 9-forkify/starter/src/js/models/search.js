import axios from 'axios'

export default class Search{
    constructor(query){
        this.query=query;
    }

    async  getResults(params,query){
        const key='b449691ac1f1143d9066e9744ac291d8';
        let res='';
        try{
            res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${query}`);
        } catch(err){
           alert(err);
        }
        this.result = res.data.recipes;
        console.log(this.result);
       }

}