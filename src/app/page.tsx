import Card from "@/components/Card";
import LoginForm from "@/components/LoginForm";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-pink-100 px-4">
      <div className="w-full max-w-sm">
        <h1 className="text-5xl text-pink-800 font-bold font-[cursive] mb-8 text-center">
          Clube das Meninas
        </h1>

        <Card title="Login">
          <LoginForm />
        </Card>
      </div>
    </main>
  );
}