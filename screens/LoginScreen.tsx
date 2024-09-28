
import { View } from "react-native";
import React from "react";
import { Text, Card, Input, Button,Icon } from "@rneui/base";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import Login from "../components/Login";
import { login } from "../services/Auth-service";
import { AxiosError } from "../services/http-service";
import Toast from "react-native-toast-message";
import { useState } from "react";
import { setislogin } from "../auth/auth-slice";
import { useAppDispatch } from "../redux-toolkit/hooks";

const LoginScreen = (): React.JSX.Element => {
  const [showPw,setshowPw] = useState(false);
  const dispatch=useAppDispatch();

  //1define validate w/ yup name schemema
  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Please input your email")
      .email("Email format is invalid"),

    password: yup
      .string()
      .required("Please input your PassWord")
      .min(3, "Password must be 3 chars"),
  });
  //2apply w/ reacthookform
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
  });

  //create on login
  const onlogin = async (data: any) => {
    try {
      const response = await login(data.email, data.password);
      if (response.status === 200) {
        dispatch(setislogin(true));
       // console.log("login sucess"); 
      // Toast.show({type:'success',text1:'Login Success'})
      }
    } catch (error: any) {
      let err:AxiosError<any>=error;
      if(err.response?.status===401){
        Toast.show({type:'error',text1:err.response.data.message})

      }
      else {
        Toast.show({type:'Error',text1:'there was a problem cannot connect to the server'})
       
      }
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text h2> POIP</Text>
      <Card containerStyle={{ padding: 10, width: "90%" }}>
        <Controller
          name="email"
          control={control}
          render={({ field: { onBlur, onChange, value } }) => (
            <Input
              placeholder="email"
              leftIcon={{ name: "email" }}
              keyboardType="email-address"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              errorMessage={errors.email?.message}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field: { onBlur, onChange, value } }) => (
            <Input
              placeholder="password"
              leftIcon={{ name: "key" }}
              rightIcon={<Icon name={showPw?"key":"email" }type="feature" onPress={()=>setshowPw(!showPw)}/>} //show PW ****โหลด icon eye,eye-off ไม่ขึ้น 
              keyboardType="default"
              secureTextEntry={!showPw}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              errorMessage={errors.password?.message}
            />
          )}
        />
        <Button title="Login" size="lg" 
        onPress={handleSubmit(onlogin)} 
        loading ={isSubmitting}
        disabled ={!isValid}
        />
        
      </Card>
    </View>
  );
};

export default LoginScreen;