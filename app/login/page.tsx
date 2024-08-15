import FormInput from "@/components/form-input";
import FormButton from "@/components/from-btn";
import SocialLogin from "@/components/social-login";

export default function Login() {
  async function handleForm(formData: FormData) { //데이터 형식이 FormData
    // 이 함수는 서버에서만 실행되도록 만들어줌
    "use server"; // 상단에 "use client"를 적는것 처럼 
    console.log(formData.get('email'), formData.get('password'))
    console.log('i run in the server baby!')
  }
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">LOGIN</h2>
      </div>
      <form action={handleForm} className="flex flex-col gap-3">
        <FormInput
          name='email'
          type='email'
          placeholder="Email"
          required
          errors={[]}
        />
        <FormInput
          name='password'
          type='password'
          placeholder="Password"
          required
          errors={[]}
        />
        <FormButton loading={false} text="Login"/>
      </form>
      <SocialLogin/>
    </div>
  );
}