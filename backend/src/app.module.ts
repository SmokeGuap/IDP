import { Module } from "@nestjs/common";

import { ConfigModule } from "@nestjs/config";
import { AuthModule } from "./auth/auth.module";
import { CategoryModule } from "./category/category.module";
import { FileModule } from "./file/file.module";
import { StoreModule } from "./store/store.module";
import { UserModule } from "./user/user.module";
import { ProductModule } from "./product/product.module";
import { ReviewModule } from "./review/review.module";

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    UserModule,
    CategoryModule,
    FileModule,
    StoreModule,
    ProductModule,
    ReviewModule,
  ],
})
export class AppModule {}
