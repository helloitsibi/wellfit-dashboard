
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableHead, TableRow, TableCell, TableBody } from "@/components/ui/table";

const mockData = [
  {
    name: "Protein Bowl",
    category: "Main Course",
    calories: 520,
    allergens: "None",
    cost: 259,
    overhead: 77.7,
    subtotal: 336.7,
    profit: 168.35,
    price: 505.05,
  },
  {
    name: "Grilled Chicken Salad",
    category: "Salad",
    calories: 350,
    allergens: "Gluten, Egg",
    cost: 215,
    overhead: 64.5,
    subtotal: 279.5,
    profit: 139.75,
    price: 419.25,
  },
  {
    name: "Quinoa Veggie Bowl",
    category: "Vegetarian Bowl",
    calories: 430,
    allergens: "Sesame, Legumes",
    cost: 126,
    overhead: 37.8,
    subtotal: 163.8,
    profit: 81.9,
    price: 245.7,
  },
];

export default function Dashboard() {
  const [search, setSearch] = useState("");
  const filtered = mockData.filter((dish) =>
    dish.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Well-Fit Menu Dashboard</h1>
      <div className="mb-4 flex gap-2">
        <Input
          placeholder="Search dish..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <Card>
        <CardContent>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Calories</TableCell>
                <TableCell>Allergens</TableCell>
                <TableCell>Cost (KES)</TableCell>
                <TableCell>Overhead</TableCell>
                <TableCell>Subtotal</TableCell>
                <TableCell>Profit</TableCell>
                <TableCell>Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filtered.map((dish, idx) => (
                <TableRow key={idx}>
                  <TableCell>{dish.name}</TableCell>
                  <TableCell>{dish.category}</TableCell>
                  <TableCell>{dish.calories}</TableCell>
                  <TableCell>{dish.allergens}</TableCell>
                  <TableCell>{dish.cost}</TableCell>
                  <TableCell>{dish.overhead}</TableCell>
                  <TableCell>{dish.subtotal}</TableCell>
                  <TableCell>{dish.profit}</TableCell>
                  <TableCell>{dish.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
