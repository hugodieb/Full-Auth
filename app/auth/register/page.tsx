import Image from "next/image";
import { RegisterForm } from "@/app/components/forms";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Full Auth | Register',
  description: 'Full Auth resgister page',
}

export default function Page() {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Image
          alt="Full Auth"
          src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
          className="mx-auto h-10 w-auto"
          width={100}
          height={100}
        />
        <h2 className="text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Sign up for your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <RegisterForm />

        <p className="mt-2 text-center text-sm/6 text-gray-500">
          Already have an account?{' '}
          <Link href="/auth/login"
            className="font-semibold text-indigo-600 hover:text-indigo-500">
            Login here...
          </Link>
        </p>
      </div>
    </div>
  );
}