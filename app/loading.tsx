import LoadingSpinner from "@/components/loading-spinner"

export default function Loading() {
  return (
    <div className="flex justify-center items-center min-h-[60vh]">
      <div className="text-center">
        <LoadingSpinner />
        <h2 className="mt-4 text-xl font-semibold text-gray-700">Loading...</h2>
        <p className="text-gray-500">Please wait while we prepare your content.</p>
      </div>
    </div>
  )
}

