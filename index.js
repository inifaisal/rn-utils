import React from "react";
import { NativeModules, Platform } from "react-native";

export const STATUSBAR_HEIGHT =
  Platform.OS === "ios" ? 20 : StatusBarManager.HEIGHT;