import { Button, Container, Content, Form, Input, Item, Label, Text } from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';

const WithdrawalMadal = ({modalVisible ,setModalVisible}) => {
    const [userPassword, setUserPassword] = useState(null);

    //  사용자 비밀번호 인증하기
    const UserWithdrawal = () => {
        if (!userPassword) {
            alert('비밀번호를 입력해주세요.');
            return;
        }
    }

    let dataToSend = {user_password: userPassword};

    fetch('http://192.168.2.110:3001/user/auth-password', {
        method: 'POST',
        body: dataToSend,
        headers: {
            'Content-Type' :
            'application/json;charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((responseJson) => {
        console.log('사용자 비밀번호 인증: ')
        console.log(responseJson)
    })

    return(
        <>
        <Container>
            <Content>
                <Form onSubmit={UserWithdrawal}>
                    <Item stackedLabel>
                        <Label>비밀번호를 입력해주세요.</Label>
                        <Input onChangeText={(userPassword) => setUserPassword(userPassword)} />
                    </Item>
                    <Button rounded>
                        <Text>확인</Text>
                    </Button>
                </Form>
            </Content>
        </Container>
        </>
    )
}