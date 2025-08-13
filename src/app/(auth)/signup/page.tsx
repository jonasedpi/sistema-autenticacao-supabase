
import colors from '@/constants/Colors';
import { View,Text,StyleSheet, TextInput, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function Signup() {
    return(
        <View style={styles.container}>
            <View style={styles.header}>

                <Pressable style={styles.backButton}
                    onPress={() => router.back()}>
                    <Ionicons name="arrow-back" size={24} color={colors.white} />
                </Pressable>

                <Text style={styles.logoText}>
                    Dev<Text style={{color: colors.green}}>App</Text>
                </Text>
                <Text style={styles.slogan}>
                        Criar uma conta
                    </Text>
            </View>
            <View style={styles.form}>


                <View>
                    <Text style={styles.label}>Nome Completo</Text>
                    <TextInput
                        placeholder='Digite seu Nome Completo..'
                        style={styles.input}    
                    />
                </View>

                <View>
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        placeholder='Digite seu email'
                        style={styles.input}    
                    />
                </View>
                
                <View>
                    <Text style={styles.label}>Senha</Text>
                    <TextInput
                        placeholder='Digite seu senha'
                        style={styles.input}
                        secureTextEntry    
                    />
                </View>
                <Pressable>
                    <Text style={styles.button}>Cadastrar</Text>
                </Pressable>

                
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: 34,
        backgroundColor: colors.zinc
    },
    header: {
        paddingLeft:14,
        paddingRight:14,
    },
    logoText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.white,
        marginBottom: 8,
    },
    slogan: {
        fontSize: 34,
        color: colors.white,
        marginBottom: 34,
    },
    form: {
        flex: 1,
        backgroundColor: colors.white,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        paddingTop: 14,
        paddingLeft: 14,
        paddingRight: 14,
    },
    label: {
        color: colors.zinc,
        marginBottom: 4,
    },
    input: {
        borderWidth: 1,
        borderColor: colors.gray,
        borderRadius: 8,
        marginBottom: 16,
        paddingHorizontal: 8,
        paddingTop: 14,
        paddingBottom: 14,
    },
    button: {
        backgroundColor: colors.green,
        paddingTop: 14,
        paddingBottom: 14,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        borderRadius: 8,
    },
    buttonText: {
        color: colors.zinc,
        fontWeight: 'bold',
    },
    backButton: {
        backgroundColor: 'rgba(255,255,255,0.55)',
        alignSelf: 'flex-start',
        padding: 8,
        borderRadius: 8,
        marginBottom: 8,
    },
});