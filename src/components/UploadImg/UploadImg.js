export default function UploadImg(props) {
  return (
    <>
      <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
        <label
          htmlFor="cover-photo"
          className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
        >
          Upload Images
        </label>
        <div className="mt-1 sm:col-span-2 sm:mt-0">
          <div className="flex max-w-lg justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
            <div className="space-y-1 text-center">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="flex text-sm text-gray-600">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                >
                  <span>Upload files</span>
                  <input
                    name="image"
                    value={props.image}
                    onChange={props.onChange}
                    type="file"
                  />
                </label>
              </div>
              <p className="text-xs text-gray-500">PNG, JPG, GIF até 1MB</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
