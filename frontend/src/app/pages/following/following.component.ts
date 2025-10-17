import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProfileService } from '../../common/services/api/profile.service';
import { UserProfile } from '../../common/models/api/profile.model';

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrl: './following.component.scss',
  standalone: true,
  imports: [CommonModule, RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FollowingComponent {
  public isLoading = signal(true);
  public followedUsers = signal<UserProfile[]>([]);

  constructor(
    private readonly _profileService: ProfileService
  ) {
    this._loadFollowedUsers();
  }

  private _loadFollowedUsers(): void {
    this._profileService.getFollowedUsers().subscribe({
      next: (response) => {
        this.followedUsers.set(response.profiles);
        this.isLoading.set(false);
      },
      error: () => {
        this.isLoading.set(false);
      }
    });
  }

  public unfollow(username: string): void {
    this._profileService.unfollowUser(username).subscribe({
      next: () => {
        this.followedUsers.update(users => users.filter(u => u.username !== username));
      }
    });
  }
}