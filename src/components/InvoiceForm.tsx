import { useState } from "react";
import { ChevronLeft, Heart, Info, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

const InvoiceForm = () => {
  const [showInvoiceInfo, setShowInvoiceInfo] = useState(true);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-6">
        <Button variant="ghost" size="sm" className="mb-6 text-primary hover:text-primary">
          <ChevronLeft className="mr-1 h-4 w-4" />
          Back
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2 p-6">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-normal text-foreground">Submit an Invoice Inquiry</h1>
              <Heart className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
            </div>

            <p className="text-sm text-destructive mb-6">* Indicates required</p>

            <div className="space-y-6">
              <div>
                <Label htmlFor="entity" className="text-sm font-normal">
                  <span className="text-destructive">*</span> Entity{" "}
                  <Info className="inline h-4 w-4 text-muted-foreground" />
                </Label>
                <div className="mt-2">
                  <a href="#" className="text-sm text-primary hover:underline flex items-center gap-1">
                    Quick Guide - Entity Selection
                    <X className="h-4 w-4" />
                  </a>
                </div>
                <Select>
                  <SelectTrigger className="mt-2 bg-white">
                    <SelectValue placeholder="Select entity" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover">
                    <SelectItem value="entity1">Entity 1</SelectItem>
                    <SelectItem value="entity2">Entity 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="invoice" className="text-sm font-normal">
                  Invoice number{" "}
                  <Info className="inline h-4 w-4 text-muted-foreground" />
                </Label>
                {showInvoiceInfo && (
                  <div className="mt-2 p-3 bg-muted border border-border rounded flex items-start justify-between">
                    <p className="text-sm text-foreground flex-1">
                      If there are multiple invoice numbers, please use the 'Description' field or upload an Excel file containing all the invoice numbers as an attachment.
                    </p>
                    <button onClick={() => setShowInvoiceInfo(false)}>
                      <X className="h-4 w-4 text-muted-foreground hover:text-foreground" />
                    </button>
                  </div>
                )}
                <Input id="invoice" className="mt-2 bg-white" />
              </div>

              <div>
                <Label htmlFor="supplier" className="text-sm font-normal">
                  <span className="text-destructive">*</span> Supplier
                </Label>
                <Input id="supplier" className="mt-2 bg-white" />
              </div>

              <div>
                <Label htmlFor="supplierList" className="text-sm font-normal">
                  <span className="text-destructive">*</span> Is Supplier in the List?
                </Label>
                <Select defaultValue="yes">
                  <SelectTrigger className="mt-2 bg-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-popover">
                    <SelectItem value="yes">Yes</SelectItem>
                    <SelectItem value="no">No</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="inquiryType" className="text-sm font-normal">
                  <span className="text-destructive">*</span> Inquiry Type{" "}
                  <Info className="inline h-4 w-4 text-muted-foreground" />
                </Label>
                <div className="mt-2">
                  <a href="#" className="text-sm text-primary hover:underline flex items-center gap-1">
                    Quick Guide - Inquiry Types
                    <X className="h-4 w-4" />
                  </a>
                </div>
                <Select>
                  <SelectTrigger className="mt-2 bg-white">
                    <SelectValue placeholder="-- None --" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover">
                    <SelectItem value="type1">Type 1</SelectItem>
                    <SelectItem value="type2">Type 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="description" className="text-sm font-normal">
                  <span className="text-destructive">*</span> Description
                </Label>
                <div className="mt-2 border border-input rounded bg-white">
                  <div className="flex items-center gap-2 p-2 border-b border-border">
                    <select className="text-sm border-none bg-transparent">
                      <option>Paragraph</option>
                    </select>
                    <div className="h-6 w-px bg-border" />
                    <button className="p-1 hover:bg-muted rounded">
                      <span className="font-bold">B</span>
                    </button>
                    <button className="p-1 hover:bg-muted rounded">
                      <span className="italic">I</span>
                    </button>
                    <div className="h-6 w-px bg-border" />
                    <button className="p-1 hover:bg-muted rounded">≡</button>
                    <button className="p-1 hover:bg-muted rounded">≡</button>
                    <button className="p-1 hover:bg-muted rounded">≡</button>
                    <button className="p-1 hover:bg-muted rounded">≡</button>
                    <div className="h-6 w-px bg-border" />
                    <button className="p-1 hover:bg-muted rounded">•</button>
                    <button className="p-1 hover:bg-muted rounded">1.</button>
                  </div>
                  <Textarea 
                    id="description" 
                    className="min-h-[200px] border-none focus-visible:ring-0" 
                  />
                </div>
              </div>
            </div>
          </Card>

          <div className="space-y-4">
            <Card className="p-4">
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                Submit
              </Button>
            </Card>

            <Card className="p-4">
              <h3 className="font-medium text-foreground mb-3">Required information</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-xs border border-info-badge text-info-badge rounded">
                  Entity
                </span>
                <span className="px-3 py-1 text-xs border border-info-badge text-info-badge rounded">
                  Supplier
                </span>
                <span className="px-3 py-1 text-xs border border-info-badge text-info-badge rounded">
                  Inquiry Type
                </span>
                <span className="px-3 py-1 text-xs border border-info-badge text-info-badge rounded">
                  Description
                </span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceForm;
