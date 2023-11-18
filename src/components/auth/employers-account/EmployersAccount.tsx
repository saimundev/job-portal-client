import Container from "@/components/shared/Container"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import SignIn from './SignIn';
import CreateAccount from './CreateAccount';

const EmployersAccount = () => {
    return (
        <Container>
            <Tabs defaultValue="create-account" >
                <TabsList className="grid w-full grid-cols-2 w-1/2 mx-auto">
                    <TabsTrigger value="create-account">Create Account</TabsTrigger>
                    <TabsTrigger value="sign-in">Log In </TabsTrigger>
                </TabsList>
                {/* create user account */}
                <TabsContent value="create-account">
                    <CreateAccount />
                </TabsContent>

                {/* sign in user  */}
                <TabsContent className="w-1/2 mx-auto" value="sign-in">
                    <SignIn />
                </TabsContent>
            </Tabs>
        </Container>
    )
}

export default EmployersAccount