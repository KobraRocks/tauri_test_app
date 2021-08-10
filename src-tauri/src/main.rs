
#[tauri::command]
fn promise_no_error_handling () -> String {
  "Hello from Rust!".into()
}

#[tauri::command]
fn promise_with_error_handling(invoke_message: String) -> Result<String, String> {

  if invoke_message == "success".to_string() {
      // If it worked
    Ok("This worked!".into())

  } else {
    // If something fails
    Err("This failed!".into())
  }
}

/*
#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]
*/
fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![promise_no_error_handling, promise_with_error_handling])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}






