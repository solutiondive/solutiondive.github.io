import { create } from "zustand";

interface TempProps {
  text: string;
  setText: (text: string) => void;
}

export const useTempStore = create<TempProps>((set) => ({
  text: "",
  setText: (text: string) => set({ text }),
}));

interface WidgetProps {
  nowView: string;
  setNowView: (nowView: string) => void;
}

export const useWidgetStore = create<WidgetProps>((set) => ({
  nowView: "terminal",
  setNowView: (nowView) => set({ nowView }),
}));

interface KeyPressProps {
  isPressed: boolean;
  setIsPressed: () => void;
}

export const useKeyPressStore = create<KeyPressProps>((set) => ({
  isPressed: false,
  setIsPressed: () => set({ isPressed: true }),
}));

interface DataProps {
  data: string;
  setData: (data: string) => void;
}

export const useDataStore = create<DataProps>((set) => ({
  data: "",
  setData: (data) => set({ data }),
}));
