import MyPlugin from "main";
import { App, ItemView, Menu, Modal, Plugin, View, WorkspaceLeaf } from "obsidian";
import * as React from "react";
import { createContext } from "react";
import { Root, createRoot } from "react-dom/client";
import { GradeBookComponent } from "views/components/GradeBookComponent";
import { CreateSubjectModal } from "./components/Gradebook/Modals"
import { Icon } from "./components/Icon";
import { GradeBookHeader } from "./components/Gradebook/GradeBookHeader"

export const GRADE_BOOK_VIEW = "grade-book-view";

export const AppContext = createContext<MyPlugin | undefined>(undefined);

export class GradeBookView extends ItemView {
    plugin: MyPlugin
    root: Root | null = null;
    constructor(leaf: WorkspaceLeaf, plugin: MyPlugin) {
        super(leaf);
        this.plugin = plugin;
    }

  getViewType() {
    return GRADE_BOOK_VIEW;
  }

  getDisplayText() {
    return "Gradebook";
  }

  getIcon(): string {
    return "check-check"
  }

  async onOpen() {
    this.root = createRoot(this.containerEl);
    this.root.render(
      <AppContext.Provider value={this.plugin}>
        <GradeBookHeader app={this.plugin.app} plugin={this.plugin}/>
        <div className="nav-files-container">
          <GradeBookComponent />
        </div>
      </AppContext.Provider>

    );
}

  async onClose() {
    this.root?.unmount();
  }
}