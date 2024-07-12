import FormInput from "@/components/form-input";
import FormButton from "@/components/from-btn";

export default function SMSLogin() {
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">SMS LOGIN</h1>
        <h2 className="text-xl">휴대폰 번호 인증하시오</h2>
      </div>
      <form className="flex flex-col gap-3">
        <FormInput
          type='number'
          placeholder="Phone number"
          required
          errors={[]}
        />
        <FormInput
          type='number'
          placeholder="Verification code"
          required
          errors={[]}
        />
        <FormButton loading={false} text="Verify"/>
      </form>
    </div>
  );
}