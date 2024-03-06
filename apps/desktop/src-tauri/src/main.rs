// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

pub mod config;
pub mod qdrant;
use std::path::PathBuf;

use tauri::{api::dir, Manager};
use window_shadows::set_shadow;

fn main() {
  tauri::Builder::default()
    .setup(|app| {
      let window = app.get_window("main").unwrap();
      set_shadow(&window, true).expect("Unsupported platform!");
      Ok(())
    })
    .plugin(qdrant::QdrantSupervisor::default())
    .invoke_handler(tauri::generate_handler![greet])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}

#[tauri::command]
fn greet(name: &str) -> Vec<PathBuf> {
  let entries = match dir::read_dir(r"F:\Images\loli", false) {
    Err(why) => {
      println!("Error in read_dir(): {:?}", why);
      let vec: Vec<dir::DiskEntry> = Vec::new();
      vec
    }
    Ok(list) => list,
  };

  let mut paths = entries
    .iter()
    .map(|entry| entry.path.to_path_buf())
    .collect::<Vec<PathBuf>>();

  paths.sort();
  paths
}
