"use client";

import Link from "next/link";
import React from "react";

import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { ModeToggle } from "@/components/theme-switcher";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/buttons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Component() {
  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
      <Link href="#" className="mr-6 lg:flex" prefetch={false}>
        <EchoIcon className="h-8 w-8" />
        <span className="sr-only">Echo</span>
      </Link>
      <nav className="ml-auto flex gap-6 items-center">
        <a href="/" className="text-lg font-semibold">
          Accueil
        </a>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <p className="text-lg font-semibold">Infos</p>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Informations</DropdownMenuLabel>
            <DropdownMenuItem>Pourquoi Echo?</DropdownMenuItem>
            <DropdownMenuItem>Le projet</DropdownMenuItem>
            <DropdownMenuItem>Contact</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Compte et confidentialité</DropdownMenuLabel>
            <DropdownMenuItem>Confidentialité et cookies</DropdownMenuItem>
            <DropdownMenuItem>
              Conditions générales de vente (CGV)
            </DropdownMenuItem>
            <DropdownMenuItem>
              Conditions générales d'utilisation (CGU)
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <LoginButton />
      </nav>
    </header>
  );
}

function EchoIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 200 200"
      fill="none"
    >
      <path
        d="M200 100C200 119.778 194.135 139.112 183.147 155.557C172.159 172.002 156.541 184.819 138.268 192.388C119.996 199.957 99.8891 201.937 80.491 198.079C61.0929 194.22 43.2746 184.696 29.2893 170.711C15.3041 156.725 5.77999 138.907 1.92147 119.509C-1.93705 100.111 0.0432836 80.0043 7.61205 61.7317C15.1808 43.459 27.9981 27.8412 44.443 16.853C60.8879 5.8649 80.2219 -2.35852e-07 100 0L100 16C83.3864 16 67.1458 20.9265 53.3321 30.1566C39.5184 39.3866 28.7519 52.5056 22.3941 67.8546C16.0364 83.2036 14.3729 100.093 17.614 116.388C20.8552 132.682 28.8554 147.649 40.603 159.397C52.3506 171.145 67.318 179.145 83.6124 182.386C99.9068 185.627 116.796 183.964 132.145 177.606C147.494 171.248 160.613 160.482 169.843 146.668C179.073 132.854 184 116.614 184 100H200Z"
        fill="#D9D9D9"
      />
      <path
        d="M100 8C112.082 8 124.045 10.3796 135.207 15.0031C146.369 19.6265 156.511 26.4032 165.054 34.9462C173.597 43.4892 180.373 53.6312 184.997 64.7931C189.62 75.9551 192 87.9184 192 100"
        stroke="#D9D9D9"
        strokeWidth="16"
      />
      <path
        d="M100 34C108.667 34 117.25 35.7071 125.257 39.024C133.265 42.3408 140.54 47.2023 146.669 53.331C152.798 59.4596 157.659 66.7354 160.976 74.7429C164.293 82.7504 166 91.3328 166 100"
        stroke="#D9D9D9"
        strokeWidth="16"
      />
      <path
        d="M100 60C105.253 60 110.454 61.0346 115.307 63.0448C120.16 65.055 124.57 68.0014 128.284 71.7157C131.999 75.4301 134.945 79.8396 136.955 84.6927C138.965 89.5457 140 94.7471 140 100"
        stroke="#D9D9D9"
        strokeWidth="16"
      />
      <path
        d="M100 86C101.839 86 103.659 86.3621 105.358 87.0657C107.056 87.7693 108.599 88.8005 109.899 90.1005C111.2 91.4005 112.231 92.9439 112.934 94.6424C113.638 96.341 114 98.1615 114 100"
        stroke="#D9D9D9"
        strokeWidth="16"
      />
    </svg>
  );
}
