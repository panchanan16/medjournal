import { BASE_URL, entityCore } from "@/config/api.config";
import { Editor } from "@tinymce/tinymce-react";

function TextEditor({ editorRef, initialContent }) {
  return (
    <Editor
      tinymceScriptSrc="/tinymce/tinymce.min.js"
      onInit={(_evt, editor) => (editorRef.current = editor)}
      initialValue={`${initialContent ? initialContent : ""}`}
      init={{
        selector: "textarea",
        license_key: "gpl",
        height: 500,
        menubar: true,
        images_upload_url: "postAcceptor.php",
        images_upload_handler: function (blobInfo, progress) {
          return new Promise((resolve, reject) => {
            const formData = new FormData();
            formData.append("otherfile", blobInfo.blob());

            fetch(`${entityCore}/texteditor/fileupload`, {
              method: "POST",
              body: formData,
            })
              .then((response) => response.json())
              .then((data) => {
                if (data.location) {
                  resolve(`${BASE_URL}${data.location}`);
                } else {
                  reject("Upload failed: No location returned.");
                }
              })
              .catch((error) => {
                reject("HTTP Error: " + error.message);
              });
          });
        },
        plugins: [
          "advlist",
          "autolink",
          "lists",
          "link",
          "image",
          "charmap",
          "anchor",
          "searchreplace",
          "visualblocks",
          "code",
          "fullscreen",
          "insertdatetime",
          "media",
          "table",
          "preview",
          "help",
          "wordcount",
        ],
        toolbar:
          "undo redo | blocks | " +
          "bold italic forecolor | alignleft aligncenter " +
          "alignright alignjustify | bullist numlist outdent indent | " +
          "removeformat | help",
        content_style:
          "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
      }}
    />
  );
}

export default TextEditor;
