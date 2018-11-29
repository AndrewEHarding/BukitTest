import React from "react";
import "./List.css";
import { Button, Collapsible, CollapsibleItem, Icon } from "react-materialize";
import NewCity from "../NewCity";
import NewNote from "../NewNote";
import News from "./News"


// function News(props)
// {

//     return(
//     // <ul>
//       <li className="articleTitle"></li>
//     //     <li className="articleURL"></li>
//     //     <li className="articleDate"></li>
//     // </ul>
//     );
// }

const List = props => {


    // function renderNews(i){

    //     var queryURL = "https://newsapi.org/v2/everything?q=" + NewCity + "&apiKey=e98708c0ae604c1c80859a0725b9b24a";


    //     fetch(queryURL)
    //       .then(res => res.json())
    //       .then(
    //         (result) => {
    //           this.setState({
    //             isLoaded: true,
    //             items: result.items,
    //             article: items[i]

    //           });
    //         },
    //         // Note: it's important to handle errors here
    //         // instead of a catch() block so that we don't swallow
    //         // exceptions from actual bugs in components.
    //         (error) => {
    //           this.setState({
    //             isLoaded: true,
    //             error
    //           });
    //         }
    //       )

    //         console.log(this.items);


    //             var title = article.title;

    //             console.log(title);
    //             // $(".articleTitle").append(
    //             //     articleCount +
    //             //     ". " +
    //             //     title 
    //             // );

    //             var url = article.url;

    //             // console.log(url);
    //             // $(".articleURL").append(
    //             //    url
    //             // );

    //             var date = article.publishedAt;

    //             // console.log(date);
    //             // $(".articleDate").append(
    //             //     date
    //             // );                


    //     return (
    //         <News
    //           value={this.title}
    //         />
    //       );


    // }

    return (
        <div>
            {props.user.list.length === 0 ? `You do not currently have any cities on your list.` :
                <Collapsible popout>
                    {props.user.list.map(item => {
                        return (
                            <CollapsibleItem key={item.city} header={item.city} icon={item.visited ? 'check_box' : 'check_box_outline_blank'}>
                                <h5>Here's some info on {item.city}!</h5>
                                {item.visited ? `You have visited ${item.city}!` : `You have not visited ${item.city} yet!`}
                                <ul>
                                    <li>Weather:</li>
                                    <li>Current News:</li>
                                </ul>
                                <p>Your Notes:</p>
                                {item.notes.length === 0 ? `You do not currently have any notes.` : item.notes.map(note => {
                                    return (<p className="note-item" key={note}>{note}</p>)
                                })}
                                <NewNote />
                                <hr></hr>
                                <Button waves='light' onClick={() => console.log('remove city')}>Remove City<Icon right>delete</Icon></Button>
                            </CollapsibleItem>
                        );
                    })}
                </Collapsible>
            }

            <NewCity />

        </div>
    );
};

export default List;