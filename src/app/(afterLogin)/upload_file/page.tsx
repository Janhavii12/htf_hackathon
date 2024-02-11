"use client";
import { useFileUpload } from '../../../../hooks/usefileupload';
import { useState } from 'react';
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

let name: string = "Class id";
let user_id: string = "user id";
let position: String = "true";
let setPosition: string = "false";

export default function upload_file() {
  const { uploadedFiles, isLoading, error, uploadFile } = useFileUpload();
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileType, setFileType] = useState('');
  const [fileName, setFileName] = useState('');

  const handleFileUpload = () => {
    if (!selectedFile || !fileType || !fileName) {
      // Handle validation or show an error message if any of the required fields are missing
      return;
    }

    const fileData = {
      file: selectedFile,
      taging: '',
      name: '',
    };

    uploadFile(fileData);
  };

  // const handleFileInputChange = (event) => {
  //   const file = event.target.files[0];

  //   if (file) {
  //     setSelectedFile(file);
  //   }
  // };

  return (
    <div className="min-h-screen bg-gray-100 w-screen">
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-semibold mb-6">Upload a File</h1>
      </div>

      <div className="grid place-items-center max-h-screen">
        <ScrollArea className="h-[500px] w-[600px] rounded-md border bg-gray-300">
          <div className="p-4 flex flex-col gap-4">
            <h4 className="mb-4 text-sm font-medium leading-none"> Uploaded files</h4>

            <Card className="w-90%">
              <CardHeader>
                <CardTitle>{name}</CardTitle>
                <CardDescription>
                  Learn the basics of English language!
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Display uploaded files */}
                {/* e.g., {uploadedFiles.map((file, index) => <div key={index}>{file}</div>)} */}
              </CardContent>
              <CardFooter></CardFooter>
            </Card>
          </div>
        </ScrollArea>
        <div className="grid w-full max-w-sm items-center gap-1.5"></div>
      </div>
      <div className=" mt-6 bottom-5  flex flex-col items-center transform translateX(-50%)  rounded-md">
        <Popover>
          <PopoverTrigger asChild>
            <Button className="bg-[#a1d777]" onClick={handleFileUpload} disabled={isLoading}>
              Upload
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="grid gap-4">
              <div className="space-y-2"></div>
              <div className="grid gap-2">
                <div className="grid grid-cols-3  items-center gap-4">
                  <Label htmlFor="file">Upload File</Label>
                  <div className="">
                    <Input id="files" type="file" />
                  </div>
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="maxWidth">exe</Label>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline">Open</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                      <DropdownMenuLabel>file types</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuRadioItem value="JPG">JPG</DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="JPEG">JPEG</DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="PNG">PNG</DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="PDF">PDF</DropdownMenuRadioItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="height">name</Label>
                  <Input
                    id="file_name"
                    className="col-span-2 h-8"
                  />
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
