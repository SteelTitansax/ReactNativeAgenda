require("firebase/firestore");
import { useLinkProps } from '@react-navigation/native';
import React , {useEffect, useState} from 'react';
import { View,Button, Text,ScrollView,StyleSheet} from 'react-native';
import firebase from '../database/firebase';
import {ListItem , Avatar} from 'react-native-elements'

const UserList = (props) => {
 const [users,setUsers] = useState([]);

 useEffect(() => {
     firebase.db.collection('users').onSnapshot(querySnapshot =>  {
        const users = [];

        querySnapshot.docs.forEach( (doc) => {
            const {name, email, phone} = doc.data()
            users.push({
                id: doc.id,
                name,
                email,
                phone
            })
        });
        setUsers(users)
     });
 }, []);
    return (

       

       
        <ScrollView>
                    <center>
                    <Avatar size="xlarge" source={{uri:"https://www.iconpacks.net/icons/2/free-opened-book-icon-3169-thumb.png",
                        }}
                        rounded 
                        />
                    </center>
            {
                users.map(user => {
                    return ( 
                        <ListItem
                          key={user.id}
                          bottomDivider
                          onPress= {() => props.navigation.navigate('UserDetailScreen', {
                             userId: user.id 
                          })}
                        >
                            <ListItem.Chevron/>
                            <Avatar source={{uri:"https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg",
                        }}
                        rounded 
                        />
                            <ListItem.Content>
                                <ListItem.Title>{user.name}</ListItem.Title>
                                <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                            </ListItem.Content>

                        </ListItem>
                    )
                })
            }

            <View>
                <Button color="#1a237e" title="Create User" onPress= {() => props.navigation.navigate("CreateUserScreen")}/>            
            </View>
             

        </ScrollView>
        
    );
};


export default UserList;