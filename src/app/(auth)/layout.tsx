export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 border border-gray-200">
        {children}
      </div>
    </div>
  );
}
