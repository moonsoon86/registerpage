import './RenderData.css';

const RenderData =props =>{
    const {outputtable} = props;
    
    var count=0;

    const finalArray = outputtable.sort((a,b)=> a.userLastName.localeCompare(b.userLastName, 'es', {sensitivity:'base'}));
    return Object.keys(finalArray).map((i, o)=>{
        const {userName, userLastName, userPhone}= finalArray[i];
        count= count+1;
        return(
     
            <tr key={count.toString(10)}>
                <th scope="row">{count.toString(10)}</th>
                <td>{userName}</td>
                <td>{userLastName}</td>
                <td>{userPhone}</td>
            </tr>
          
        )
        });
}
export default RenderData;