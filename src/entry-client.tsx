// @refresh reload
import { mount, StartClient } from "@solidjs/start/client";

/* global document */
mount(() => <StartClient />, document.getElementById("app")!);
